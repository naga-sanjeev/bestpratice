const baseUrl="http://172.17.12.65:8000";
export const environment={
    //login check
    login:baseUrl+'/users/login',
    //admin urls
    listOfUsers:baseUrl+"/listofusers",
    postUserData:baseUrl+"/postuserdata",
    updateUserData:baseUrl+"/updateuserdata/",
    deleteUserData:baseUrl+"/deleteuser/",
    getUserDataById:baseUrl+"/idbased/",
    //doctor urls
    getDoctorData:baseUrl+"/listofrole/doctor",
    getSlotTime:baseUrl+"/listofappointments",
    //patientdata
    getPatientData:baseUrl+"/users/patientdata/",
    deletePatientSlot:baseUrl+"/users/deleteslot/",
}