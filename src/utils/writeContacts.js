import { PATH_DB } from '../constants/contacts.js';
// import * as fs from 'node:fs';
import { writeFile } from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  await writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
};
