# Project Overview

## Project Name

# Gettin' Quizzy Wit It

[Gettin' Quizzy Wit It - Website](https://getting-quizzy-wit-it.netlify.app/ "Link")

## Project Description

Gettin' Quizzy Wit It is an Airtable React app that allows the user to experience the 90's through fun quizzes. The user is able to select from three different quizzes, once a quiz is selected they can answer the questions and receive a score at the end. Upon completion the user will be asked if they'd like to add a question to the quiz.

# Wireframes

[Gettin' Quizzy Wit It - Wireframe](https://www.figma.com/file/SW9W5mMHD7wbcgxt2gVM2y/Gettin'-Quizzy-Wit-It?node-id=0%3A1 "Wireframe")

## Desktop Wireframes

HOMEPAGE
![alt text][wireframe]

[wireframe]: https://i.ibb.co/nzNtkfN/Screen-Shot-2021-12-01-at-10-32-35-PM.png "Desktop Wireframe - Homepage"

QUIZ PAGE
![alt text][wireframe1]

[wireframe1]: https://i.ibb.co/dbH3tfn/Screen-Shot-2021-12-01-at-10-32-51-PM.png "Desktop Wireframe - Quiz Page"

RESULTS PAGE
![alt text][wireframe2]

[wireframe2]: https://i.ibb.co/X8ZhTQP/Screen-Shot-2021-12-01-at-10-33-17-PM.png "Desktop Wireframe - Results Page"

ADD PAGE
![alt text][wireframe3]

[wireframe3]: https://i.ibb.co/yW1Sw0s/Screen-Shot-2021-12-01-at-10-33-36-PM.png "Desktop Wireframe - ADD Page"

## Mobile Wireframes

![alt text][wireframe4]

[wireframe4]: https://i.ibb.co/Vjph6Rw/Screen-Shot-2021-12-01-at-10-50-27-PM.png "Desktop Wireframe - Homepage"

## Component Hierarchy

[Component Hierarchy](https://www.figma.com/file/54thvJOSQ4pQPoVGKF58PU/Gettin'-Quizzy-Wit-It---Component-Hierarchy?node-id=0%3A1)

![alt text][component-hierarchy]

[component-hierarchy]: https://i.ibb.co/LP2LYz3/Screen-Shot-2021-12-01-at-11-21-24-PM.png "Component Hierarchy"

## API and Data Sample

```json
{
  "records": [
    {
      "id": "recmlg3im9seL8fJX",
      "fields": {
        "question": "Which character had an evil doodle double?",
        "answer1": "Spongebob",
        "answer2": "Dexter",
        "answer3": "Courage",
        "answer4": "Ed",
        "category": "cartoon",
        "correct": "Spongebob"
      },
      "createdTime": "2021-12-02T16:44:23.000Z"
    },
    {
      "id": "recMbdcRYgXGhzatg",
      "fields": {
        "question": "What animal is Rocko from Rocko's Modern Life?",
        "answer1": "Dog",
        "answer2": "Rat",
        "answer3": "Wallaby",
        "answer4": "Kangaroo",
        "category": "cartoon",
        "correct": "Wallaby"
      },
      "createdTime": "2021-12-02T16:55:57.000Z"
    },
    {
      "id": "recZr9tTEzSREL7MF",
      "fields": {
        "question": "Which cartoon taught us a bit of a different language?",
        "answer1": "Arthur",
        "answer2": "Dora the Explorer",
        "answer3": "Caillou",
        "answer4": "Invader Zim",
        "category": "cartoon",
        "correct": "Dora the Explorer"
      },
      "createdTime": "2021-12-02T16:57:55.000Z"
    }
  ],
  "offset": "itrSHYKkF1jzArehz/recZr9tTEzSREL7MF"
}
```

### MVP/PostMVP

#### MVP

- Build functional React App
- Utilize React Router
- Have at least 6 rendered components
- Have an organized and understandable React file structure
- Use Axios for GET/ POST requests
- Use only React DOM manipulation
- Use CSS and/or CSS libraries to style
- Use flexbox or grid
- Implement responsive design on 2 screen sizes using media query
- Must follow linting guidelines
- Deploy via Netlify
- Minimum of 50 commits total
- Add three quizzes
- Data for the quizzes to be added via Airtable API (Building a table for each quiz topic)

#### PostMVP

- Add animations to page
- Add comment section for reviews on the quizzes
- Add more quizzes (90's references & Only 90's will remember)

## Project Schedule

| Day            | Deliverable                                            | Status     |
| -------------- | ------------------------------------------------------ | ---------- |
| December 1     | Prompt / Wireframes / Component Hierarchy / Timeframes | Complete   |
| December 2     | Project Approval                                       | Complete   |
| December 3     | Build API Data via Airtable                            | Complete   |
| December 4 & 5 | Access & Render API Data                               | Complete   |
| December 6     | Build Functionality for Quiz & Build Form              | Complete   |
| December 7     | Build Design via CSS & Make Responsive                 | Complete   |
| December 8     | MVP & Testing/Debugging                                | Complete   |
| December 9     | Presentations                                          | Incomplete |

## Timeframes

| Component                               | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Build Airtable                          |    H     |      4hrs      |     5hrs      |    5hrs     |
| Render API Data                         |    H     |      4hrs      |    1.5hrs     |   1.5hrs    |
| Build function for buttons              |    H     |      2hrs      |     4hrs      |    4hrs     |
| Build functionality for quiz results    |    H     |      5hrs      |    3.5hrs     |   3.5hrs    |
| Adding Form                             |    H     |      3hrs      |      1hr      |     1hr     |
| Design app with CSS                     |    H     |      4hrs      |     9hrs      |    9hrs     |
| Set up responsiveness and media queries |    H     |      4hrs      |     5hrs      |    5hrs     |
| Fulfill remaining MVP                   |    H     |      3hrs      |    2.5hrs     |   2.5hrs    |
| Testing & Debugging                     |    H     |      3hrs      |      1hr      |     1hr     |
| Total                                   |    H     |     32hrs      |    32.5hrs    |   32.5hrs   |

## SWOT Analysis

### Strengths: Being able to build the components and keeping them organized for cleaner code.

### Weaknesses: Potentially having trouble knowing exactly where to call certain states and params to get the data to render correctly.

### Opportunities: To build more knowledge on how to set up functions for the quiz results, but will look up resources.

### Threats: Not being able to get all the data needed to build the quizzes within the API.

## Resources

### Emoji Set Up: https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7

### Textured Background: https://www.transparenttextures.com/
