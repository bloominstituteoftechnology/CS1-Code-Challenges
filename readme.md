# CS1 - Lambda School Code Challenges
## steps to ensuring your changes get pulled down
1. You will only need to run this step once
```console
git remote add upstream https://github.com/ryanhca/CS1-Code-Challenges.git
```

## NOTE: I think this step is incorrect
2. To get the changes to the repo each day run this
```console
git pull upstream master
```

3. You'll then have to resolve any merge conflicts that come up. Don't worry, you'll be pros at this after you're done and this is something that you'll have to do in the real world... all the time. :/

***

# NOTE TO RYAN from Patrick:

1. After the origin and upstream are established, such that:
```console
$  git remote -v
origin	https://github.com/ryanhca/CS1-Code-Challenges.git (fetch)
origin	https://github.com/ryanhca/CS1-Code-Challenges.git (push)
upstream	https://github.com/-STUDENT_GITHUB_HANDLE-/CS1-Code-Challenges (fetch)
upstream	https://github.com/-STUDENT_GITHUB_HANDLE-/CS1-Code-Challenges (push)
```

2. Then, to get the changes from the origin (ryanhca) master, the students will need to run:
```console
$  git pull origin master
```

3. These commands posted durig the Brown Bag
```console
git remote add upstream https://github.com/ryanhca/CS1-Code-Challenges.git
git pull upstream master
git remote -v

git remote set-url upstream https://github.com/-STUDENT_GITHUB_HANDLE-/CS1-Code-Challenges
// git push/commit etc.
```

4. ...should be changed to:
```console
// THESE TWO STEPS ONLY NEED TO BE DONE ONCE
$ git remote add upstream https://github.com/ryanhca/CS1-Code-Challenges.git
$ git pull upstream master

// USE THIS TO SEE HOW YOUR ORIGIN AND UPSTREAM ARE CONFIGURED FOR FETCH AND PUSH
$ git remote -v

// SET YOUR UPSTREAM TO YOUR GITHUB
$ git remote set-url upstream https://github.com/-STUDENT_GITHUB_HANDLE-/CS1-Code-Challenges

// CONFIRM THAT ORIGIN IS RYAN AND UPSTREAM IS YOUR GITHUB ACCOUNT
$ git remote -v

// NOW, FOR EACH NEW CODING CHALLENGE
// TO GET NEW CONTENT:
$  git pull origin master
// May require merge conflict resolution

// STAGING FILES LOCALLY
$ git add <file_name>
// MAKING LOCAL COMMITS
$ git commit -m '<awesome_message>'
// STAYS THE SAME.

// TO PUSH YOUR WORK TO YOUR GITHUB REPOSITORY:
$ git push upstream master

<<<<<<< HEAD
// TO SUBMIT A PULL REQUEST TO RYAN'S (origin) GITHUB REPOSITORY,
// GO ONLINE TO https://github.com/ryanhca/CS1-Code-Challenges
// RYAN'S REPOSITORY AND SUBMIT A NEW PULL REQUEST
```
=======
- You'll then have to resolve any merge conflicts that come up. Don't worry, you'll be pros at this after you're done and this is something that you'll have to do in the real world... all the time. 
>>>>>>> 16c30f05fda2a6621522f580bcc60d0ea35e639e
