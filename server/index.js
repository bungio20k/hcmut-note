const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();
mongoose.connect("mongodb+srv://toanday:toan1402@cluster0.ssxqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true }).catch(err => console.error(err));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));


const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
})
const noteSchema = new Schema({
  id: String,
  title: String,
  text: String,
  date: String,
  time: String,
  tag: String,
  pinned: String,
  content: String,
  color: String,
  databaseid: String,
})
const notesListSchema = new Schema({
  user: String,
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'note'
  }]
})
const userModel = mongoose.model('user', userSchema, 'user');
const noteModel = mongoose.model('note', noteSchema, 'note');
const notesListModel = mongoose.model('noteslist', notesListSchema, 'noteslist');

app.post('/login', async (req, res) => {
  const check = await userModel.findOne({
    username: req.body.user,
    password: req.body.password
  });
  if (check) res.send({ token: check._id.toString() });
  else res.send({ token: 'not found' })
})

app.post('/register', (req, res) => {
  userModel.findOne({ username: req.body.user }).exec((err, data) => {
    if (data)
      res.json("Username already exists");
    else {
      const newUser = new userModel({ username: req.body.user, password: req.body.password });
      const data = newUser.save((err, data) => {
        const newList = new notesListModel({
          user: data._id.toString(),
          notes: []
        });
        newList.save();
      });
      res.redirect('/login');
    }
  })
})

app.post('/allnotes', async (req, res) => {
  const data = await notesListModel.findOne({ user: req.body.userId }).populate('notes');
  if (data) res.send(data.notes);
})

app.post('/notechange', async (req, res) => {
  const note = req.body.note;
  console.log('add/modify:', note);
  // add new empty note and retrieve _id
  if (!note.hasOwnProperty('databaseid')) {
    const newNote = new noteModel();
    const data = await newNote.save();
    note['databaseid'] = data._id.toString();

    // add to noteList
    const list = await notesListModel.findOne({
      user: req.body.userId,
    });
    list.notes.push(data._id);
    list.save();
  }
  // modify note
  const currentNote = await noteModel.findById(note.databaseid);
  currentNote.id = note.databaseid;
  currentNote.title = note.title;
  currentNote.text = note.text;
  currentNote.date = ((note.date == 'Invalid Date') ? '' : (new Date(note.date)).toString());
  currentNote.time = note.time;
  if (note.tag[0] == '#')
    currentNote.tag = note.tag;
  else
    currentNote.tag = '#' + note.tag;
  currentNote.pinned = note.pinned;
  currentNote.content = note.content;
  currentNote.color = note.color;
  currentNote.databaseid = note.databaseid;
  currentNote.save();

  res.send(currentNote._id.toString());
})

app.post('/deletenote', async (req, res) => {
  const check = await noteModel.findByIdAndDelete(req.body.noteId);
  console.log('deleted: ', check);
  const list = await notesListModel.findOne({ user: req.body.userId });
  list.notes = list.notes.filter((noteid) => (noteid.toString() != req.body.noteId));
  list.save();
})


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});