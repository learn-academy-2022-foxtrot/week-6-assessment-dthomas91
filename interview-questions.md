# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: This is a problem that can be easily fixed. The foreign key is simply called belongs_to so for this example in the Student model it would be belongs_to :cohort

Researched answer: To fix this you would run a rails g statement for the model. then add-in your foreign key into rails g and run rails db:migrate. Then you can add has_many :students in cohort.rb and belongs_to :cohort in students.rb.


2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that must always be passed params are Show, Create, Edit, Update, and Destroy. The reason why the passed params are required is because it identifies exactly what you are trying to do. For example show(params[:id])

Researched answer: Show, Create, Edit, Update, and Destroy.... I can't seem to find any resources that explains this either in the syllabus or trying to look for answers on google. At least not anything I am comprehending.

3. Name three rails generator commands. What is created by each?

Your answer: Rails new (creates a new folder with the rails structure in it), rails db:create (this creates the database),
rails server (this starts the server allowing you to see your new app in your browser)

Researched answer: Rails new, gives your folder all the files it needs to run a simple app.  rails db:create, creates a database that is empty on your local. rails server allows you to open your browser at localhost3000.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
index , this would return the main database 

action: "POST" location: /students
create , this allows table to be created

action: "GET" location: /students/new
new , in this case it would allow you to add a new student

action: "GET" location: /students/2
show , this would display the student with the id 2

action: "GET" location: /students/2/edit
edit , allows you to edit the information for the data of student with id 2

action: "PATCH" location: /students/2
update , allows you to update the params of student with id 2

action: "DELETE" location: /students/2
destroy , deletes student with id 2 from the database

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


Story 1: In order to interact with the to do list application, as a user of the application, I need to see a list of all task items

Story 2: As a user of the application, I need to see the details of one task item

Story 3: I need to see a form where I can fill out information to add a new task on to the list.

Story 4: As a user, I need the ability to create a new to do list.

Story 5: As a user of the application, I need the ability to delete a to do list.

Story 6: As a user of the application, I need to see a form where I can fill out information to edit an existing to do list.

Story 7: As a user of the application, I need to update an the current status of an existing to do list.

Story 8: As a user of the application, I can review past to do lists.

Story 9: As a developer of the application, I need to ensure only valid data is entered into the database.

Story 10: As a user of the application, I need to see pleasant styling of the app.