import { writeFile } from 'fs/promises'

export default defineEventHandler(async (event) => {
  const formData: any = await readMultipartFormData(event)

  const file = formData.find((item: any) => item.name == 'file')

  console.log(file.filename, file.data.length)

  const path = './uploads/' + file.filename

  await writeFile(path, file.data)
  return {
    path
  }
})