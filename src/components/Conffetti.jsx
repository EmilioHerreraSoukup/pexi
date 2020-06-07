import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

function loop(ctx, confs) {
  requestAnimationFrame(loop);
  ctx.clearRect(0, 0, 100, 100);

  confs.forEach((conf) => {
    conf.update();
    conf.draw(ctx);
  });
}

function Confetti() {
  // construct confetti
  const colours = ['#fde132', '#009bde', '#ff6b00'];

  this.x = Math.round(Math.random() * 100);
  this.y = Math.round(Math.random() * 100) - 100 / 2;
  this.rotation = Math.random() * 360;

  const size = Math.random() * (100 / 60);
  this.size = size < 15 ? 15 : size;

  this.color = colours[Math.floor(colours.length * Math.random())];

  this.speed = this.size / 7;

  this.opacity = Math.random();

  this.shiftDirection = Math.random() > 0.5 ? 1 : -1;
}

Confetti.prototype.border = function () {
  if (this.y >= 100) {
    this.y = 100;
  }
};

Confetti.prototype.update = function () {
  this.y += this.speed;

  if (this.y <= 100) {
    this.x += this.shiftDirection / 3;
    this.rotation += (this.shiftDirection * this.speed) / 100;
  }

  if (this.y > 100) this.border();
};

Confetti.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, this.rotation, this.rotation + Math.PI / 2);
  ctx.lineTo(this.x, this.y);
  ctx.closePath();
  ctx.globalAlpha = this.opacity;
  ctx.fillStyle = this.color;
  ctx.fill();
};

export const Confettix = () => {
  const canvas = useRef(null);

  useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    const confNum = Math.floor(100 / 4);
    const confs = new Array(confNum).fill().map((_) => new Confetti(ctx));
    loop(ctx, confs);
  }, []);

  return (
    <div>
      <Holder ref={canvas} />
    </div>
  );
};

const Holder = styled.canvas`
  width: 100%;
  height: 100%;
`;
