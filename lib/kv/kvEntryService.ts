import { entryExists, findAllEntries, saveEntry } from './kvEntryRepository.ts';
import { DBKvEntry, KvEntry, KvKeyPart, KvValueType, Pagination, StrippedKvEntry } from './models.ts';

export async function getAllEntries(pagination?: Pagination): Promise<StrippedKvEntry[]> {
  const entries = await findAllEntries(pagination);
  return entries.map(mapToKvStrippedEntry);
}

export async function createEntry(key: KvKeyPart[], value: unknown): Promise<KvEntry> {
  if (!(await entryExists(key))) {
    throw new Error(`Can't create entry with key: [${key.join(', ')}] because an entry already exists.`);
  }

  const newEntry = await saveEntry(key, value);

  return mapToKvEntry(newEntry);
}

function mapToKvStrippedEntry(kvEntry: DBKvEntry): StrippedKvEntry {
  return {
    id: kvEntry.id,
    key: kvEntry.key,
    valueType: getValueType(kvEntry.value),
  };
}

function mapToKvEntry(kvEntry: DBKvEntry): KvEntry {
  return {
    id: kvEntry.id,
    key: kvEntry.key,
    valueType: getValueType(kvEntry.value),
    value: kvEntry.value,
  };
}

function getValueType(value: unknown): KvValueType {
  if (value === null) {
    return KvValueType.NULL;
  }

  switch (typeof value) {
    case 'object':
      return KvValueType.OBJECT;
    case 'boolean':
      return KvValueType.BOOLEAN;
    case 'number':
      return KvValueType.NUMBER;
    case 'undefined':
      return KvValueType.UNDEFINED;
    default:
      return KvValueType.STRING;
  }
}