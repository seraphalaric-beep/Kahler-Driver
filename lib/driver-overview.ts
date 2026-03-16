/**
 * Driver overview content - exact text from A Guide to Kahler's Five Drivers.
 * Do not reinterpret. Use only what is provided in the source document.
 */

import type { DriverType } from './questionnaire-data';

export type DriverOverview = {
  title: DriverType;
  description: string;
  identifiableBy: string[];
  supportTips: string[];
  supportSectionHeading: string; // Exact wording from source document
};

export const DRIVER_OVERVIEWS: Record<DriverType, DriverOverview> = {
  'Be Perfect': {
    title: 'Be Perfect',
    description:
      'Be Perfect people draw energy from doing the \'right\' things. They aim for perfection in everything, check carefully, produce accurate work and set high standards. The drawback to this driver is sometimes they miss deadlines because they are still checking their work. They tend to insist everything is done perfectly, so they can come across as overly critical. Their major strength as an example, is their reputation for producing accurate, reliable work. They check the facts carefully, prepare thoroughly and pay attention to the details. This working style means they are well organised, look ahead and plan how to deal with potential problems. In this way, they are not taken by surprise but have contingency plans ready to put into effect. A Be Perfect personality works well in jobs where detail and setting standards are important.',
    identifiableBy: [
      'Using exact language, including qualification when they are not sure, such as \'probably\', and absolutes when they are, such as \'absolutely\'.',
      'Always neat and well-groomed.',
      'Never completely satisfied with what they do.',
    ],
    supportTips: [
      'Encourage them to laugh at any mistakes they may make.',
      'Praise them, especially for less-than-perfect work.',
      'Reframe what \'perfect\' really means to \'enough\'.',
      'Be very specific with criticism (and praise).',
    ],
    supportSectionHeading: 'The best way to interact and support individuals with this tendency is:',
  },
  'Be Strong': {
    title: 'Be Strong',
    description:
      'Be Strong individuals have the ability to stay calm in any circumstance. They are driven by the need to cope with crises, difficult people, and will work steadily through any workload. They happily take control of situations and people will often feel safe around them knowing that someone so directive is in charge. However, their desire to have everything under control means they can often come across as aloof. People with Be Strong drivers do not often see themselves as fully responsible for their thoughts and - especially - for their feelings. They are also reluctant to ask for help, even when they should, and their lack of awareness of emotions may make them insensitive to the feelings of others. The internal message that they give themselves is that they should not let others think that they are weak. For example, they may stand apart from playful activities fearing they may look childish. A Be Strong personality is very good at accommodating poor working conditions or putting up with things that many would find unreasonable.',
    identifiableBy: [
      'Aggressive or assertive attitude, demonstrating strength in attitude.',
      'Objective language and distancing themselves from their feelings.',
    ],
    supportTips: [
      'Help them see where their strength appears as a threat to others.',
      'Show them that they are not to blame for things, including their own internal issues.',
      'Show that you recognise them and that it is ok for them to have feelings.',
      'Praise them for the consideration of other people\'s feelings.',
    ],
    supportSectionHeading: 'The best way to interact and support individuals with this tendency is:',
  },
  'Hurry Up': {
    title: 'Hurry Up',
    description:
      'People with Hurry Up styles like to do everything as quickly as they can, which means they get a lot done. They are energised by having deadlines to meet, and always seem able to fit in extra tasks. However, give them time to spare and they might delay starting until the job becomes urgent. This can backfire because in their haste they make mistakes. Their underlying motivation is to do things quickly, they feel good if they can complete tasks in the shortest possible time. Like organisation and methods specialists, they look for the most efficient way to do work in the hope of shaving even a few minutes off each task. Their urge to save time may be inappropriately applied to everything they do, instead of being reserved for those tasks where it will make a real difference. And their ability to think fast will lead them to appear impatient and frustrated with others. Hurry Up individuals are great in situations where there are deadlines to meet, or the nature of a task is likely to evolve over time, they always seem to be able fit more work in.',
    identifiableBy: [
      'Enthusiastic and action-oriented.',
      'Many things on the go at once. Often juggling several quite different activities.',
      'Talking quickly and checking the clock frequently.',
    ],
    supportTips: [
      'Thank them for their time.',
      'Ensure they think before they act.',
      'Help them to \'be\' without \'doing\'. Get them to sit quietly and appreciate a single moment!',
    ],
    supportSectionHeading: 'Some useful ways to support individuals with this tendency are:',
  },
  'Please Others': {
    title: 'Please Others',
    description:
      'Please Other individuals are incredibly pleasant to have around because they are so understanding. They use intuition a lot and will notice body language and other signals that others may overlook. They are often the mortar that holds a team together. Unfortunately, they may worry so much about earning approval that they are reluctant to challenge anyone\'s ideas even when they know they are wrong. Because they\'re reluctant to say no, they often let people interrupt them and are likely to accept work from them instead of concentrating on their own priorities. They are often seen to be lacking assertiveness, critical skills, and often lacking courage in their convictions. When criticised by others, they may take it personally and get upset even when the comments are worded constructively. A Please Others personality performs the \'maintenance\' functions of involving people, checking and summarising, and will be sympathetic, empathetic, tolerant and flexible to others needs.',
    identifiableBy: [
      'Always testing that people are happy and satisfied.',
      'Smiling and always having a friendly expression.',
      'Frames everything as a question that invites approval.',
      'Apologetic. Will say \'sorry\' for almost anything and even just to fill space.',
    ],
    supportTips: [
      'Make pleasing themselves a criteria for pleasing you. Be happy when they are happy (but beware of getting in a mutual pleasing competition).',
      'Help them accept criticism without feeling put down or a failure. Do not get angry with them.',
      'Help them to see when pleasing others turns into dysfunctional subservience.',
      'Encourage them to become self-sufficient and praise themselves.',
    ],
    supportSectionHeading: 'Some useful ways to support individuals with this tendency are:',
  },
  'Try Hard': {
    title: 'Try Hard',
    description:
      'Try Hard people are enthusiastic, get involved in lots of different activities, and tend to volunteer for things. They are energised by having something new to try. But sometimes turn small jobs into major projects because they want to chase every possibility. They may even become bored with the detailed work that follows, even to the point of leaving work undone so they can move on to a new, exciting activity. People value their motivation and the way they have of getting things off the ground. They\'re often popular with other colleagues, with customers or clients, because of their enthusiastic approach to problem solving. However, their communication with others may be pained and strained, they tend to frown a lot whilst listening to others. Their own sentences are likely to go off at tangents because they introduce new thoughts just as they come to mind. Try Hard\'s are important to have in any team because they give their utmost in all situations. They are incredibly persistent in difficult and time-consuming situations and are very willing to help others.',
    identifiableBy: [
      'Never satisfied with what has been done.',
      'Using language that uses the verb \'try\' rather than \'will\'.',
      'Often appear tense and anxious.',
    ],
    supportTips: [
      'Help them move from \'trying\' to \'succeeding\'. Start with the language they use.',
      'Stop them moving to another task before the first is complete.',
      'Help them distinguish between that which is achievable and that which is not realistically possible.',
    ],
    supportSectionHeading: 'The best way to interact and support individuals with this tendency is:',
  },
};
