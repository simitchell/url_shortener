import { useState, useEffect } from "react";
import { OuterContainer } from "./MyStyles";

export default function LinkList({ linkList }) {
  const src_url = import.meta.env.VITE_SOURCE_URL;
  return (
    <ul>
      {linkList.map((link, id) => {
        return (
          <li key={id}>
            <a
              href={`${src_url}/snd/${link.short_url}`}
              title={`Short link to ${link.title}`}
              target="_blank"
              rel="noreferrer"
            >
              {link.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
