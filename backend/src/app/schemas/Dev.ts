import { Schema, model, Document } from 'mongoose'

import PointSchema from './utils/PointSchema'

interface DevInterface extends Document {
  bio: string,
  name: string,
  avatar_url: string,
  github_username: string,
  techs: [string]
}

const DevSchema = new Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dsphere'
  }
}, {
  timestamps: true
})

export default model<DevInterface>('Dev', DevSchema)

export { DevInterface }
