const jsonData = {
    "_id": {
      "$oid": "63b64dc9e3b230ebb60a495d"
    },
    "_key": "topic:2085",
    "category": "Course",
    "cid": {
      "$numberDouble": "NaN"
    },
    "commitment": "4 hours",
    "commitment_type": "custom",
    "deadline": "",
    "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
    "faqs": [],
    "globalTags": [],
    "isActive": true,
    "lastposttime": 0,
    "learning_outcomes": [
      "Bare minimum knowledge of project management",
      "4SA Concept",
      "Would be able to handle any project efficiently"
    ],
    "mainPid": 0,
    "postcount": 0,
    "pre_requisites": [
      "An open mind to learn any concept",
      "Thought of Unlearning and Relearning "
    ],
    "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
    "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
    "slug": "2085/technical-project-management",
    "status": "published",
    "tasks": [
      {
        "task_id": 18882,
        "task_title": "Explore the world of management",
        "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        "status": "notworkyet",
        "assets": [
          {
            "asset_id": 18883,
            "asset_title": "Technical Project Management",
            "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
            "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
            "asset_type": "display_asset",
            "asset_content_type": "video"
          },
          {
            "asset_id": 18884,
            "asset_title": "Threadbuild",
            "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "threadbuilder"
          },
          {
            "asset_id": 18885,
            "asset_title": "Structure you pointers ",
            "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "article"
          },
          {
            "asset_id": 18886,
            "asset_title": "4SA Method",
            "asset_description": "To explore more read more",
            "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            "asset_type": "display_asset",
            "asset_content_type": "article"
          }
        ]
      }
    ],
    "tid": 2085,
    "timestamp": 1672891849700,
    "title": "Technical Project Management",
    "type": "project",
    "uid": 100,
    "viewcount": 0,
    "publishedAt": 1672893847792
  }
  
  
  // Add event listener to execute the function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    createAssetComponent(jsonData, 'main-content');
    sidebar_content(jsonData)
    sidebar_tasks(jsonData)
  });
  
  
  document.getElementById('sidebar-btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('collapsed');
  });
  document.querySelector('.sidebar .top button').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('collapsed');
  });
  
  function createAssetComponent(data, containerId) {
    const mainContainer = document.getElementById(containerId);
  
    data.tasks.forEach(task => {
      task.assets.forEach(asset => {
        const assetContainer = document.createElement('div');
        assetContainer.className = 'asset-container';
  
        const headerDiv = document.createElement('div');
        const heading = document.createElement('h2');
        heading.textContent = asset.asset_title;
        const infoBtn = document.createElement('span');
        infoBtn.className = 'info-btn';
        const infoImg = document.createElement('img');
        infoImg.src = './asset/i.png';
        infoImg.alt = '';
        infoBtn.appendChild(infoImg);
        headerDiv.appendChild(heading);
        headerDiv.appendChild(infoBtn);
  
        const article = document.createElement('article');
        const paragraph = document.createElement('p');
        const span = document.createElement('span');
        span.textContent = 'Description:';
        paragraph.appendChild(span);
        paragraph.append(' ' + asset.asset_description.replace(/\r?\n|\r/g, ' '));
        article.appendChild(paragraph);
  
        const assetContent = document.createElement('div');
        assetContent.className = 'asset-content';
  
        if (asset.asset_content_type === 'threadbuilder') {
          const threadDiv = document.createElement('div');
          threadDiv.className = 'thread';
  
          const threadImg = document.createElement('img');
          threadImg.src = './asset/Vector.png';
          threadImg.className = 'thread-img';
          threadImg.alt = '';
          threadDiv.appendChild(threadImg);
  
          const threadText = document.createElement('h1');
          threadText.textContent = 'Thread A';
          threadText.className = 'thread-text';
          threadDiv.appendChild(threadText);
  
          const addThreadDiv = document.createElement('div');
          addThreadDiv.className = 'add-thread';
  
          const subThreadDiv = document.createElement('div');
          subThreadDiv.className = 'sub-thread-div';
  
          const subThread = document.createElement('div');
          subThread.className = 'sub-thread';
  
          const subThreadText = document.createElement('h1');
          subThreadText.textContent = 'Sub thread 1';
          subThreadText.className = 'sub-thread-text';
          subThread.appendChild(subThreadText);
  
          const subThreadInputDiv = document.createElement('div');
          subThreadInputDiv.className = 'input-thread';
  
          const subThreadInput = document.createElement('input');
          subThreadInput.type = 'text';
          subThreadInput.placeholder = 'Enter Text here';
          subThreadInput.className = 'sub-thread-input';
          subThreadInputDiv.appendChild(subThreadInput);
          subThread.appendChild(subThreadInputDiv);
  
          subThreadDiv.appendChild(subThread);
  
          const subInterception = document.createElement('div');
          subInterception.className = 'sub-interception';
  
          const subInterceptionText = document.createElement('h1');
          subInterceptionText.textContent = 'Sub interception 1';
          subInterceptionText.className = 'sub-thread-text';
          subInterception.appendChild(subInterceptionText);
  
          const subInterceptionInputDiv = document.createElement('div');
          subInterceptionInputDiv.className = 'input-thread';
  
          const subInterceptionInput = document.createElement('input');
          subInterceptionInput.type = 'text';
  
          subInterceptionInput.placeholder = 'Enter Text here';
          subInterceptionInput.className = 'sub-thread-input';
          subInterceptionInputDiv.appendChild(subInterceptionInput);
          subInterception.appendChild(subInterceptionInputDiv);
  
          subThreadDiv.appendChild(subInterception);
  
          addThreadDiv.appendChild(subThreadDiv);
  
          const buttonsSection = document.createElement('div');
          buttonsSection.className = 'buttons-section';
  
          const catalogImg = document.createElement('img');
          catalogImg.src = './asset/Group 1588.png';
          catalogImg.alt = '';
          buttonsSection.appendChild(catalogImg);
  
          const selectCatalogButton = document.createElement('button');
          selectCatalogButton.className = 'select-button';
          selectCatalogButton.textContent = 'Select categ';
          const catalogButtonImg = document.createElement('img');
          catalogButtonImg.src = './asset/Vector-down.png';
          catalogButtonImg.alt = '';
          selectCatalogButton.appendChild(catalogButtonImg);
          buttonsSection.appendChild(selectCatalogButton);
  
          const selectProcessButton = document.createElement('button');
          selectProcessButton.className = 'select-button';
          selectProcessButton.textContent = 'Select process';
          const processButtonImg = document.createElement('img');
          processButtonImg.src = './asset/Vector-down.png';
          processButtonImg.alt = '';
          selectProcessButton.appendChild(processButtonImg);
          buttonsSection.appendChild(selectProcessButton);
  
          addThreadDiv.appendChild(buttonsSection);
  
          const addSubThreadButton = document.createElement('button');
          addSubThreadButton.className = 'add-sub-thread';
          addSubThreadButton.textContent = '+ Sub Thread';
          addThreadDiv.appendChild(addSubThreadButton);
  
          const summaryDiv = document.createElement('div');
          summaryDiv.className = 'summary-of-thread';
  
          const summaryText = document.createElement('h1');
          summaryText.textContent = 'Summary for thread A';
          summaryText.className = 'sub-thread-text';
          summaryDiv.appendChild(summaryText);
  
          const summaryInputDiv = document.createElement('div');
          summaryInputDiv.className = 'input-thread';
  
          const summaryInput = document.createElement('input');
          summaryInput.type = 'text';
          summaryInput.placeholder = 'Enter Text here';
          summaryInput.className = 'sub-thread-input';
          summaryInputDiv.appendChild(summaryInput);
          summaryDiv.appendChild(summaryInputDiv);
  
          addThreadDiv.appendChild(summaryDiv);
  
          assetContent.appendChild(threadDiv);
          assetContent.appendChild(addThreadDiv);
        }
  
        else if (asset.asset_content_type === 'article' && asset.asset_type === 'input_asset') {
  
          assetContent.style.padding = '20px';
  
          const innerDiv = document.createElement('div');
          innerDiv.style.padding = '20px';
          innerDiv.style.height = '100%';
  
          const titleParagraph = document.createElement('p');
          titleParagraph.style.fontSize = '16px';
          titleParagraph.style.fontWeight = '600';
          titleParagraph.style.lineHeight = '21.79px';
          titleParagraph.style.padding = '13px 0';
          titleParagraph.textContent = 'Title';
          innerDiv.appendChild(titleParagraph);
  
          const titleInput = document.createElement('input');
          titleInput.type = 'text';
          titleInput.className = 'input';
          innerDiv.appendChild(titleInput);
  
          const contentParagraph = document.createElement('p');
          contentParagraph.style.fontSize = '16px';
          contentParagraph.style.color = '#000000';
          contentParagraph.style.fontWeight = '600';
          contentParagraph.style.lineHeight = '21.79px';
          contentParagraph.style.padding = '16px 0';
          contentParagraph.textContent = 'Content';
          innerDiv.appendChild(contentParagraph);
  
          const contentValue = document.createElement('div');
          contentValue.className = 'content-value';
  
          const topDiv = document.createElement('div');
          topDiv.className = 'top';
  
          const optionsDiv = document.createElement('div');
          optionsDiv.className = 'options';
          const optionButtons = ['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Table', 'Help'];
          optionButtons.forEach(text => {
            const button = document.createElement('button');
            button.textContent = text;
            optionsDiv.appendChild(button);
          });
          topDiv.appendChild(optionsDiv);
  
          const editingDiv = document.createElement('div');
          editingDiv.className = 'editing';
          const editingImages = ['./asset/arrow-curve-left-right.png', './asset/arrow-curve-left-down.png', './asset/arrow-expand-02.png'];
          editingImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = '';
            editingDiv.appendChild(img);
          });
  
          const paragraphInput = document.createElement('input');
          paragraphInput.type = 'text';
          paragraphInput.className = 'paragraph';
          paragraphInput.placeholder = 'Paragraph';
          editingDiv.appendChild(paragraphInput);
  
          const buttonsDiv = document.createElement('div');
          buttonsDiv.className = 'buttons';
          const buttonImages = ['./asset/Ellipse 197.png', './asset/Ellipse 197.png', './asset/Ellipse 197.png'];
          buttonImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = '';
            buttonsDiv.appendChild(img);
          });
          editingDiv.appendChild(buttonsDiv);
  
          topDiv.appendChild(editingDiv);
          contentValue.appendChild(topDiv);
  
          const bottomDiv = document.createElement('div');
          bottomDiv.className = 'bottom';
          contentValue.appendChild(bottomDiv);
  
          innerDiv.appendChild(contentValue);
          assetContent.appendChild(innerDiv);
  
          assetContainer.appendChild(headerDiv);
          assetContainer.appendChild(article);
          assetContainer.appendChild(assetContent);
          mainContainer.appendChild(assetContainer);
        }
        else if (asset.asset_content_type === 'video') {
          // Handle other asset content types (video, article, input_asset) as needed
          const iframe = document.createElement('iframe');
          iframe.src = asset.asset_content.trim();
          iframe.allowFullscreen = true;
          assetContent.appendChild(iframe);
        }
        else {
          const iframe = document.createElement('iframe');
          iframe.src = asset.asset_content.trim();
          iframe.style.width = '100%';
          iframe.style.height = '450px';
          iframe.allowFullscreen = true;
          assetContent.appendChild(iframe);
        }
  
  
        assetContainer.appendChild(headerDiv);
        assetContainer.appendChild(article);
        assetContainer.appendChild(assetContent);
        mainContainer.appendChild(assetContainer);
      });
    });
  }
  const sidebar_content = (data) => {
    const sidebar = document.querySelector('#sidebar .bottom ul');
  
  
    // Clear the existing content (if any)
    sidebar.innerHTML = '';
  
    // Loop through tasks
    data.tasks.forEach(task => {
  
      // Create a list item for the task title
      const taskItem = document.createElement('li');
      taskItem.textContent = task.task_title;
  
      // Create a nested list for the assets
      const assetList = document.createElement('ul');
  
      // Loop through assets
      task.assets.forEach(asset => {
        const assetItem = document.createElement('li');
        assetItem.textContent = asset.asset_title;
        assetList.appendChild(assetItem);
      });
  
      // Append the asset list to the task item
      taskItem.appendChild(assetList);
      // Append the task item to the sidebar
      sidebar.appendChild(taskItem);
    });
  
  }
  let taskCount = 0;
  const sidebar_tasks = (data) => {
    const taskCounter = document.querySelector('#sidebar .bottom ');
  
    // Populate the task list and count the number of tasks
    data.tasks.forEach(task => {
      taskCount++;
      const count = document.createElement('div')
      count.className = 'total'
      count.textContent = `${taskCount}`
  
      taskCounter.appendChild(count)
    })
  }
  
  