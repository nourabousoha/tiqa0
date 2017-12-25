import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const devSchema = new Schema({
  name: { type: 'String', trim:true,required: true },
  email: { type: 'String',trim:true, required: true },
  desc: { type: 'String',trim:true, required: true },
  image: { type: 'String',trim:true },
  fees: { type: 'Number' },
  status: { type: 'Boolean' ,default:false},
  devid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  projects:[{ type: Schema.ObjectId, ref: 'Story' }]
});

export default mongoose.model('Dev', devSchema);
