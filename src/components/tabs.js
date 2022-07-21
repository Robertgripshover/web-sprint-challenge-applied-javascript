
import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>

  const topicsDiv = document.createElement('div');
  const javascriptTab = document.createElement('div');
  const bootstrapTab = document.createElement('div');
  const technologyTab = document.createElement('div');
  const jqueryTab = document.createElement('div');
  const nodeTab = document.createElement('div');

  topicsDiv.appendChild(javascriptTab);
  topicsDiv.appendChild(bootstrapTab);
  topicsDiv.appendChild(technologyTab);
  topicsDiv.appendChild(jqueryTab);
  topicsDiv.appendChild(nodeTab);

  topicsDiv.classList.add('topics');
  javascriptTab.classList.add('tab');
  bootstrapTab.classList.add('tab');
  technologyTab.classList.add('tab');
  jqueryTab.classList.add('tab');
  nodeTab.classList.add('tab');

  javascriptTab.textContent = topics[0]
  bootstrapTab.textContent = topics[1]
  technologyTab.textContent = topics[2]
  jqueryTab.textContent = topics[3]
  nodeTab.textContent = topics[4]

  return topicsDiv;

}

const tabsAppender = (selector) => {
  // TASK 4
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
 
  axios.get(`http://localhost:5001/api/topics`)
  .then(result => {
    const theTopics = result.data.topics
     document.querySelector(selector).appendChild(Tabs(theTopics))
    })

    }
       
    export { Tabs, tabsAppender }
