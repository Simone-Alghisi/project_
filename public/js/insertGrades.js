import {
  getUrlVars,
  refreshToken,
  dealWithForbiddenErrorCode,
  dealWithServerErrorCodes
} from './common.js';

import {
  prepareClassOnLoad,
  setClassName
} from './commonProfessor.js';

(function ($) {
  "use strict";

  let class_id = getUrlVars()['class'];
  let subject = getUrlVars()['subject'];
  //console.log(class_id);
  //console.log(subject);
  let usersWithGrades = [];
  let grades_list = '';
  $('#navViewGrades').attr("href", './grades.html?class=' + class_id + '&subject=' + subject);
  $('#back').attr("onclick", "location.href='./grades.html?class=" + class_id + "&subject=" + subject + "';");

  //datatables
  let studentsTable = $('#studentsTable').DataTable({
    'paging': false,
    'searching': false,
    'info': false
  });

  let gradesMapping = {
    '0': 'Nessun voto',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10'
  }

  for (let key in gradesMapping) {
    grades_list += '<option value="' + key + '">' + gradesMapping[key] + '</option>';
  }

  //TODO CHANGE CLASS ID 
  function getStudents(attemptMade = false){
    let url = '../api/v1/users?class_id='+ class_id +'&role=' + 0;
    //console.log(url);
    fetch(url, {
      method: 'GET',
      headers: { 
        'Authorization': 'Bearer ' +  window.sessionStorage.accessToken
      }
    })
    .then((resp) => {
      if(resp.ok){
        return resp.json();
      }else if(resp.status == 403){
        if(!attemptMade){
          refreshToken().then(() => getStudents(true)).catch(() => dealWithForbiddenErrorCode());
        }else{
          dealWithForbiddenErrorCode();
        }
      } else {
        dealWithServerErrorCodes();
      }
    })
    .then((students) => {
      //console.log(students);
      students.forEach((user) => {
        addStudent(user);
      })
    })
  }

  function addStudent(user) {
    usersWithGrades[user._id] = user;
    studentsTable.row.add([
      user.name,
      user.surname,
      '<select class="form-control" id="' + user._id + '" name="'+  user._id+'">' + grades_list + '</select>'
    ]).draw().node();
  }

  function fetchGrade(gradeElement,  attemptMade = false) {
    return new Promise((resolve, reject) => {
      const url = '../api/v1/classes/' + class_id + '/grades';

      let data;
      data = JSON.stringify(gradeElement);
      console.log(data);

      let fetchData = {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + window.sessionStorage.accessToken
        }
      }
      fetch(url, fetchData)
        .then((resp) => {
          if (resp.ok) {
            return;
          } else if (resp.status == 403) {
            if(!attemptMade){
              refreshToken().then(() => fetchGrade(gradeElement, true)).catch(() => dealWithForbiddenErrorCode());
            }else{
              dealWithForbiddenErrorCode();
            }
          } else {
            dealWithServerErrorCodes();
          }
        })
        .then((resp) => {
          resolve();
        })
        .catch(
          error => {
            console.error(error)
            reject();
          }
        ); 
    });
  }

  async function sendGrades() {
    let description =  $('#description').val();
    let date =  $('#date').val();
    let studentGrade = {};

    for (let key in usersWithGrades) {
      let studentId = usersWithGrades[key]._id;
      let value = $('#' + studentId + ' option:selected').val();
      //console.log(studentId);
      //console.log($('#' + studentId + ' option:selected').val());

      //console.log(studentGrade);
      studentGrade['description'] = description;
      studentGrade['subject'] = subject; 
      studentGrade['date'] = date;
      studentGrade['student_id'] = studentId;
      studentGrade['value'] = value;
      if(value != 0) 
        await fetchGrade(studentGrade);
    }
    $(location).prop('href', './grades.html?class=' + class_id + '&subject=' + subject);
  }

  $('#form').submit((event) => {
    sendGrades();
    event.preventDefault();
  });

  getStudents();
  setClassName();
  prepareClassOnLoad();

})(jQuery);