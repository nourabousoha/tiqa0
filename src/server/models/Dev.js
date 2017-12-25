import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const devSchema = new Schema({
  name: { type: 'String', required: true },
  email: { type: 'String', required: true },
  desc: { type: 'String', required: true },
  fees: { type: 'Integer', required: true },
  status: { type: 'Boolean', required: true ,default:false},
  id: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  projects:[{ type: Schema.ObjectId, ref: 'Story' }]
});

export default mongoose.model('Dev', devSchema);
