import useSWR, { mutate } from "swr";

const trekPath = "/api/treks";
const contactUsMessagePath = "/api/contact";

export const useTreks = () => useSWR(trekPath);

export const createTrek = async (trek) => {
  mutate(
    trekPath,
    treks => [{ ...trek, id: "new-trek" }, ...treks],
    false,
  );
  await fetch(trekPath, {
    method: "POST",
    body: JSON.stringify({ trek }),
  });

  mutate(trekPath);
};

export const updateTrek = async (trek) => {
  mutate(
    trekPath,
    treks =>
      treks.map(t =>
        t.id === trek.id ? { ...trek } : t,
      ),
    false,
  );

  await fetch(`${trekPath}?trekId=${trek.id}`, {
    method: "PUT",
    body: JSON.stringify({ trek }),
  });
  mutate(trekPath);
};

export const deleteTrek = async (id) => {
  mutate(trekPath, treks => treks.filter(t => t.id !== id), false);
  await fetch(`${trekPath}?trekId=${id}`, { method: "DELETE" });
  mutate(trekPath);
};

export const sendMessage = async (message) => {
  await fetch(contactUsMessagePath, {
    method: "POST",
    body: JSON.stringify({ message }),
  });
};
