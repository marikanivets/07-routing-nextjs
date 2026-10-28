// app/@modal/(.)notes/[id]/NotePreview.client.tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { fetchNoteById } from '../../../../lib/api';
import Modal from '../../../../components/Modal/Modal';
import css from './NotePreview.module.css';

export default function NotePreviewClient() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { data: note, isLoading } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return null;
  if (!note) return null;

  return (
    <Modal isOpen={true} onClose={() => router.back()}>
      <div className={css.previewContent}>
        <button onClick={() => router.back()} className={css.backBtn}>
          Back
        </button>
        <h1 className={css.title}>{note.title}</h1>
        <div className={css.meta}>
          <span className={css.tag}>#{note.tag}</span>
        </div>
        <p className={css.content}>{note.content}</p>
        <span className={css.date}>
          {new Date(note.createdAt).toLocaleString()}
        </span>
      </div>
    </Modal>
  );
}
