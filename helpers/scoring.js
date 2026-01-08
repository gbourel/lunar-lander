import {
  CRASH_VELOCITY,
  CRASH_ANGLE,
  VELOCITY_MULTIPLIER,
} from "./constants.js";
import { progress } from "./helpers.js";

export const landingScoreDescription = (score) =>
  score >= 120
    ? "Tellement de bonus. Et sans crash ?? Incroyable"
    : score >= 99
    ? "Parfait, incroyable, vous avez atteint la perfection"
    : score >= 95
    ? "Presque parfait, tout en douceur"
    : score >= 90
    ? "Impressionant, bravo"
    : score >= 85
    ? "Un succès, continuez comme ça !"
    : score >= 80
    ? "Jolie arrivée"
    : score >= 75
    ? "L'ombre d'une réelle réussite"
    : score >= 70
    ? "Ah oui, c'est un peu réussi"
    : score >= 65
    ? "Une arrivée plus douce et plus droite serait mieux"
    : score >= 60
    ? "Pas l'arrivée la pire, mais pas la meilleure non plus"
    : score >= 55
    ? "Une arrivée ratée, mais ça aurait pu être pire"
    : score >= 55
    ? "Pas terrible"
    : score >= 40
    ? "Vous avez confondu avec un fer à repasser ?"
    : score >= 30
    ? "On aurait cru à un crash, c'était tellement rapide"
    : "Une arrivée catastrophique, il faut arriver lentement et droit";

export const crashScoreDescription = (score) =>
  score >= 120
    ? "Tellement de bonus. Tellement de crashs."
    : score >= 100
    ? "Incroyable ! Le cratère est visible de la terre"
    : score >= 95
    ? "Impressionnant ! Les débris du crash sont arrivés en orbite !"
    : score >= 90
    ? "Un crash impressionnant !"
    : score >= 85
    ? "Vitesse impressionnante, angle impressionnant - un crash qui a du style"
    : score >= 80
    ? "Un crash rapide, qui aurait pu être encore plus rapide"
    : score >= 75
    ? "C'était réellement voulu ce crash ?"
    : score >= 70
    ? "Ah oui, c'est sur l'arrivée est complètement ratée"
    : score >= 65
    ? "A priori il y a un problème avec cette arrivée"
    : score >= 60
    ? "Un crash impressionnant !"
    : score >= 50
    ? "Vous vous rapellez que le but est d'arriver en un seul morceau ?"
    : score >= 40
    ? "Un crash terrible, qui aurait pu être encore pire"
    : score >= 30
    ? "...tant pis pour le retour sur terre on dirait"
    : score >= 20
    ? "En douceur… heu… un crash en douceur..."
    : score >= 10
    ? "Le vaisseau est… détruit"
    : score < 0
    ? "Il faut arriver sur la zone blanche"
    : "Presque une arrivée normale, mais c'est un crash";

export const destroyedDescription = () => {
  const remarks = [
    "Cet astéroïde est venu de nulle part !",
    "Un petit manque de fuel ? Oh, et vous avez explosé",
    "Oui, c'était bien un astéroïde",
    "Bizarre, je ne trouve plus le vaisseau…",
    "Pour la prochaine fois, évitez les astéroïdes...",
    "A priori entrer en collision avec un astéroïde n'est pas une bonne idée",
    "Astéroïde 1 Attérisseur 0",
    "Au moins vous avez essayé",
  ];
  return remarks[Math.floor(Math.random() * remarks.length)];
};

// Perfect land:
// angle: 0
// speed: 1
//
// Worst possible landing:
// angle: 11
// speed: 12
export const scoreLanding = (angle, speed) => {
  const bestPossibleCombo = 1;
  const worstPossibleCombo = CRASH_ANGLE + CRASH_VELOCITY * VELOCITY_MULTIPLIER;
  return (
    progress(
      worstPossibleCombo,
      bestPossibleCombo,
      angle + speed * VELOCITY_MULTIPLIER
    ) * 100
  );
};

export const scoreCrash = (angle, speed) => {
  const bestPossibleCombo = 900;
  const worstPossibleCombo = Math.min(
    CRASH_VELOCITY * VELOCITY_MULTIPLIER,
    CRASH_ANGLE
  );
  return (
    progress(
      worstPossibleCombo,
      bestPossibleCombo,
      angle + speed * VELOCITY_MULTIPLIER
    ) * 100
  );
};
