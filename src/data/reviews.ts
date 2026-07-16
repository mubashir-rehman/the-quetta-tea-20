// Real 5-star Google reviews for The Quetta Tea 20 (lightly copyedited for
// spelling/grammar; wording and sentiment preserved). Avatar images are the
// reviewers' public Google profile photos — hotlinked, with an initials
// fallback in the UI in case a photo URL changes.
const GAVATAR = "https://lh3.googleusercontent.com";

export interface Review {
  name: string;
  initial: string;
  avatar: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Mubashir Rehman",
    initial: "M",
    avatar: `${GAVATAR}/a/ACg8ocKYUDJ7P4OzsyvQV3oaHOzEk53ZpjVyHitVatdllZ94a3x_uEwZtQ=s96-c`,
    text: "The Quetta Tea 20 in Barkat Market is my regular spot — it honestly feels like a second home now. A rooftop, open-air place with cozy vibes: good lighting and a nice balance between calm and lively. The music is always great, and you can even request songs to match your mood.",
  },
  {
    name: "Zayn",
    initial: "Z",
    avatar: `${GAVATAR}/a/ACg8ocLiwBWYFVGFJe2eih1mCOL-gYJfCKDpylNrP__zwCYHpyZs1Q=s96-c`,
    text: "The ambiance here is quite pleasant, with a really relaxing vibe, and the tea was great. If you're looking for a rooftop spot to enjoy a refreshing tea break, this is definitely worth a visit.",
  },
  {
    name: "Khurshid Sherani",
    initial: "K",
    avatar: `${GAVATAR}/a-/ALV-UjXQkcS85ddkPtOhTlUn5p4ATW73JSHYe0Q6UWBGQs3evgm_cL5U=s96-c`,
    text: "I had a wonderful time at Quetta Tea 20. The chai was refreshing and the pizza was awesome. The atmosphere was amazing, with old songs — mostly NFAK — playing in the background.",
  },
  {
    name: "Zeeshan Ali Qadri",
    initial: "Z",
    avatar: `${GAVATAR}/a-/ALV-UjUnzsHarkPh9a5KvW2LaiqeWcxWoOSlyu1DpHpfTk5ztMvOI669=s96-c`,
    text: "A cozy place to spend time with friends or loved ones. Tried their Tarragon Steak and Jalapeno Crunchy Burger — both tasted amazing, and the staff were polite.",
  },
  {
    name: "Aftab Ahmad",
    initial: "A",
    avatar: `${GAVATAR}/a-/ALV-UjVDl457F5a_n9F3IHaK6SdEfmvI6sV4eD0ZIpNAR77usHAPKXcQcw=s96-c`,
    text: "The experience was really good and we truly enjoyed it. The staff is very cooperative and the taste is unique.",
  },
  {
    name: "Ali Ahmad",
    initial: "A",
    avatar: `${GAVATAR}/a/ACg8ocKhELeSMhg7Wz86SLcZFutF6COnIhvOhyfo0PT4-LRBCy17iw=s96-c`,
    text: "Best place to hang out with friends, with good service. Highly recommended.",
  },
  {
    name: "Kiran Shehzadi",
    initial: "K",
    avatar: `${GAVATAR}/a/ACg8ocITcRTqQcZ-Qu78n5sN4UjItrqrfvkaaR9E9hirGR6g4pCk2w=s96-c`,
    text: "Everything is perfect — they're doing a great job. Allah pak barkat farmaye, Ameen.",
  },
];
