![GitHub last commit](https://img.shields.io/github/last-commit/Ryuku72/FeSamplePrj?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Ryuku72/FeSamplePrj?style=for-the-badge)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ebd5b957-fbc5-4ebf-ad1f-eedeb2a1e492/deploy-status)](https://fssampleprj.netlify.app/)

# FE Sample Project
30th August 2020 <br>
https://fssampleprj.netlify.app/

## `Contents`

* [Introduction](#intro)
* [Time Allocation](#time)
* [Build Process](#build)
* [Project Issues](#issues)
* [Additional Information](#add)
<br>
<br>
<a name="intro"></a>

## `Introduction`

### Specifications
* The app has two main pages, ‘signin’ and ‘dashboard’.
* The user must be directed to the signin page until they submit a 4+ character name.
* If the user signs out they are redirected to the signin page and any previously name is cleared.
* Dashboard is comprised of a Header Menu (LogOut and Settings), Sidebar (Load More buttons and 10 posts), Body (view focused post)

### Technical Requirements
* Use react-router to route app between /signin, /dashboard and /dashboard/settings modal. Use the existence of a valid name to conditionally route the user to /signin or /dashboard.
* Use the existence of a valid name to conditionally route the user to /signin or /dashboard.
* Render some obvious part(s) of the dashboard according to the user’s color setting if set, and otherwise some default color.
* Make the menu in the top right into a proper collapsible drop down menu.
* Clicking outside the settings modal closes the modal.
* Clicking outside the drop down menu closes the menu.
* Display the loading image (see HTML template) in the middle of the page whenever content is loading.
* Preferably use create-react-app to create the app and use only the following non-dev packages react, react-dom, react-router, redux, react-redux, axios or fetch. The fewer additional packages the better.
* Use react-redux to store app state. The app state should include the following state:
 ```
 {  
    name: String,  
    color: String,  
    posts: [{}],  
    isFetchingPosts: Boolean,
 }
 ```

### Stretch Goals
* Make the app look nicer
<br>
<br>

<a name="time"></a>

## `Time Allocation`
Total time allocated to this project was just over 10 hours. Its hard to truly measure as the scheduling become slightly messy. I have included a breakdown below of how time was allocated in regards to the build process

29th August
* 9.00pm Started project by building the folder structures, Github projectr files and React App
* 9.40pm Started build the foundation for Redux State Management. 
* 11.00pm Started buidling the Login Page 
* 12.30pm finished basic Login and Redux states
* 1.30pm Added Redux persists through LocalStorage.
* 2.30pm Finished 20% of the dashboard. Sleep

30th August
* 3.20pm Started working on the sidebar and body
* 4.35pm Finished basics of Dashboard. Taking a break
* 6.30pm Started again. Fixing responsiveness and styles
* 9.00pm project finished besides dropdown menu
* 9.45pm project complete
* 10.30pm Documentation complete and uploaded to Netlify 
<br>
<br>
<a name="build"></a>

## `Build Process`
Having recently been building a project with Redux this project on the initial wasn't too bad. The core issue was more about allocating time and just small issues like LocalStorage. The time allocation should give a clear breakdown of how the project was build but the core was the following:

Redux States => Login Page => DashBoard

There was a lot of fiddling around inbetween due to just small design issues like responsiveness. States were also broken into 2 main categories (user and api) for future upscaling. Tailwind CSS once again was very helpful with quickly getting styles sorted out but the overall design is very basic.

There are no true components in this project as I wanted to minimize time. Given more time, I would have broken down the project into smaller components ot make the code more clean.

In summary, most of the requirements needed I had already done in some of my other projects so this was not too difficult coping them over.
<br>
<br>
 <a name="issues"></a>

## `Project Issues`

No many issues, just an under estimate of how many states were need to correctly record all important information alongside using useState for toggles. There is some small loading issues that I am not happy (sometimes after loading the old information persists then flicks over to the new information).

As there is no real components used in this project the code does become messy and maybe in future builds this will also be taken into account in the prebuild setup.

Overall a lot of the time could have been reduces by correctly planning out some of Redux states and actually using useState when needed. Besides that working from home did appear to be its own issue.
<br>
<br>

<a name="add"></a>

## `Additional Information`
### Tests
* Eslint from React

### License
Licenses: MIT

### Resources
* Medium
* Stackoverflow
* Youtube


### Technology
* TailwindCSS
* React
* React-Router-Dom
* Redux
* React-Redux
* React DevTools
* Redux-thunk
* JavaScript
* CSS
<br>
<br>

### Joshua K Bader // Ryuku72 // Bader.JoshuaK@Gmail.com