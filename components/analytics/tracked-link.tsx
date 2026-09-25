"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useRef } from "react";

import { ButtonLink, type ButtonLinkProps } from "@/components/ui/button";

type BeginCheckoutParams = {
  currency: "EUR";
  value: number;
  items: {
    item_id: string;
    item_name: string;
  }[];
};

type BookSessionParams = {
  service_name: "Sessione Evolutiva" | "Soul Design";
  currency: "EUR";
  value: number;
};

type GenerateLeadParams = {
  lead_source: "orientation_cta";
};

export type TrackingEvent =
  | {
      name: "begin_checkout";
      params: BeginCheckoutParams;
    }
  | {
      name: "book_session_click";
      params: BookSessionParams;
    }
  | {
      name: "generate_lead";
      params: GenerateLeadParams;
    };

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: TrackingEvent["name"],
      params: Record<string, unknown>,
    ) => void;
  }
}

function isModifiedClick(event: MouseEvent<HTMLAnchorElement>) {
  return (
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  );
}

function shouldOpenOutsideCurrentTab(
  event: MouseEvent<HTMLAnchorElement>,
  target?: string,
) {
  return isModifiedClick(event) || (!!target && target.toLowerCase() !== "_self");
}

function sendTrackingEvent(
  tracking: TrackingEvent,
  onDone?: () => void,
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    onDone?.();
    return;
  }

  let completed = false;

  const finish = () => {
    if (completed) return;
    completed = true;
    onDone?.();
  };

  window.gtag("event", tracking.name, {
    ...tracking.params,
    event_callback: finish,
    event_timeout: 900,
  });

  window.setTimeout(finish, 1000);
}

type TrackedButtonLinkProps = ButtonLinkProps & {
  tracking: TrackingEvent;
};

export function TrackedButtonLink({
  href,
  target,
  tracking,
  onClick,
  children,
  ...props
}: TrackedButtonLinkProps) {
  const recentlyTracked = useRef(false);

  return (
    <ButtonLink
      href={href}
      target={target}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || recentlyTracked.current) return;

        recentlyTracked.current = true;
        window.setTimeout(() => {
          recentlyTracked.current = false;
        }, 1200);

        if (shouldOpenOutsideCurrentTab(event, target)) {
          sendTrackingEvent(tracking);
          return;
        }

        if (href.startsWith("http")) {
          event.preventDefault();
          sendTrackingEvent(tracking, () => {
            window.location.assign(href);
          });
          return;
        }

        sendTrackingEvent(tracking);
      }}
      {...props}
    >
      {children}
    </ButtonLink>
  );
}

type TrackedAnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> & {
  href: string;
  tracking: TrackingEvent;
  children: ReactNode;
};

export function TrackedAnchor({
  href,
  target,
  tracking,
  onClick,
  children,
  ...props
}: TrackedAnchorProps) {
  const recentlyTracked = useRef(false);

  return (
    <a
      href={href}
      target={target}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || recentlyTracked.current) return;

        recentlyTracked.current = true;
        window.setTimeout(() => {
          recentlyTracked.current = false;
        }, 1200);

        if (shouldOpenOutsideCurrentTab(event, target)) {
          sendTrackingEvent(tracking);
          return;
        }

        if (href.startsWith("http")) {
          event.preventDefault();
          sendTrackingEvent(tracking, () => {
            window.location.assign(href);
          });
          return;
        }

        sendTrackingEvent(tracking);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
