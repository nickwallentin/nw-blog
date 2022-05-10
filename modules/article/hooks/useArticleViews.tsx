import { useEffect, useState } from 'react';

import { fetcher } from '@lib/utils/fetcher';
import store from 'store';
import useSWR from 'swr';

export default async function useArticleViews(id) {
  useEffect(() => {
    const alreadyViewed = store.get(`article:${id}`);
    if (!alreadyViewed) {
      pushView(id);
      store.set(`article:${id}`, true);
    }
  }, []);
  const pushView = async (id: string) => {
    await fetch(`/api/views/${id}/push`);
  };
  return { push: pushView };
}
