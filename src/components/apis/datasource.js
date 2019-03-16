import axios from "axios";

const url = (protocol, hostname, port) => {
  return `${protocol}//${hostname}:${port}`;
};
const base = url(
  window.location.protocol,
  window.location.hostname,
  window.location.port
);

export const baseLink = axios.create({
  baseURL: base
});
