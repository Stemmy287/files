import {instance} from "common/constants/instanceApi";

export const filesApi = {
  getFiles() {
    return instance.get<FileType[]>('')
      .then(res => res.data)
  },
  getFile(id: number) {
    return instance.get<FileType>(id.toString())
      .then(res => res.data)
  },
  createFile(data: FileType) {
    return instance.post('', data)
  },
  deleteFile(id: number) {
    return instance.delete(id.toString())
  },
  updateFile(id: number, data: UpdateFileType) {
    return instance.patch(id.toString(), data)
  }

}

//types
export type FileType = {
  id: number
  title: string
  text: string
}

export type UpdateFileType = Partial<Omit<FileType, 'id'>>