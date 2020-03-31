import { NyanMode } from 'nyan-mode';

window.onload = () => {
  const e = document.getElementById('div');
  const t = document.getElementById('box');
  NyanMode.New({
    width: 1000,
    height: 64
  }).create(e!, t!);
};
