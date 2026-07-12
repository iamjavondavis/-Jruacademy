# Jru Academy Architecture

## Current version

The application currently uses:

- One `index.html` file
- Embedded CSS for responsive design
- Embedded JavaScript for lesson logic
- Data-driven math and reading missions
- Browser `localStorage` for XP, scores, attempts, and mastery

## Current data model

### Student progress

- XP
- Streak
- Math scores
- Reading scores
- Attempts by mission

### Mission structure

- ID
- Title
- Skill
- XP reward
- Story or scenario
- Questions
- Answer choices
- Correct answer

## Recommended production upgrade

1. Split HTML, CSS, JavaScript, and lesson data into separate files.
2. Add Firebase Authentication for parent and student access.
3. Store progress in Firestore for cross-device syncing.
4. Add a parent-controlled AI tutor endpoint.
5. Add Google Sheets or email-based weekly parent reports.
6. Deploy through GitHub Pages initially, then migrate to Vercel when server-side features are needed.
