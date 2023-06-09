import {instance} from "common/constants/instanceApi";
import {AxiosResponse} from "axios";

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
    return instance.post<'', AxiosResponse<FileType>, FileType>('', data)
      .then(res => res.data)
  },
  deleteFile(id: number) {
    return instance.delete(id.toString())
  },
  updateFile(file: FileType) {
    return instance.patch<'', AxiosResponse<FileType>, UpdateFileType>(file.id.toString(), {title: file.title, text: file.text})
      .then(res => res.data)
  }

}

//types
export type FileType = {
  id: number
  title: string
  text: string
}

export type UpdateFileType = Partial<Omit<FileType, 'id'>>