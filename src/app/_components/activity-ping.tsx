"use client";

import { useEffect, useRef } from "react";

import { todayLocalKey } from "~/lib/date";
import { api } from "~/trpc/react";

/** Records that the (single) user opened the app today — powers the login streak. */
export function ActivityPing() {
  const ping = api.activity.ping.useMutation();
  const hasPinged = useRef(false);

  useEffect(() => {
    if (hasPinged.current) return;
    hasPinged.current = true;
    ping.mutate({ date: todayLocalKey() });
  }, [ping]);

  return null;
}
