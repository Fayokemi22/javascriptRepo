
const API_URL = "http://127.0.0.1:8000/applicants";


// 1. REGISTER APPLICANT

function registerApplicant(applicantData) {

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(applicantData)
    })

    .then(function(response) {
        if (!response.ok) {
            throw new Error("Unable to register applicant");
        }

        return response.json();
    })

    .then(function(data) {
        alert("Applicant registered successfully!");
        console.log(data);
        viewAllApplicants();
    })

    .catch(function(error) {
        console.log(error);
        alert("Registration failed.");
    });
}


// 2. VIEW ALL APPLICANTS

function viewAllApplicants() {

    fetch(API_URL)

    .then(function(response) {
        if (!response.ok) {
            throw new Error("Unable to retrieve applicants");
        }

        return response.json();
    })

    .then(function(data) {
        console.log(data);
        displayApplicants(data);
    })

    .catch(function(error) {
        console.log(error);
        alert("Unable to retrieve applicants.");
    });
}


// 3. VIEW ONE APPLICANT

function viewApplicant(id) {

    fetch(API_URL + "/" + id)

    .then(function(response) {
        if (!response.ok) {
            throw new Error("Applicant not found");
        }

        return response.json();
    })

    .then(function(data) {
        console.log(data);

        alert(
            "Applicant Details\n\n" +
            "Name: " + data.first_name + " " + data.last_name + "\n" +
            "Email: " + data.email + "\n" +
            "Phone: " + data.phone_number + "\n" +
            "Address: " + data.address + "\n" +
            "Role: " + data.role + "\n" +
            "Education: " + data.education + "\n" +
            "Company: " + data.company + "\n" +
            "Application Date: " + data.application_date + "\n" +
            "Job Link: " + data.job_link + "\n" +
            "Status: " + data.status + "\n" +
            "Location: " + data.location
        );
    })

    .catch(function(error) {
        console.log(error);
        alert("Unable to find applicant.");
    });
}


// 4. UPDATE APPLICANT

function updateApplicant(id, applicantData) {

    fetch(API_URL + "/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(applicantData)
    })

    .then(function(response) {
        if (!response.ok) {
            throw new Error("Unable to update applicant");
        }

        return response.json();
    })

    .then(function(data) {
        alert("Applicant updated successfully!");
        console.log(data);
        viewAllApplicants();
    })

    .catch(function(error) {
        console.log(error);
        alert("Update failed.");
    });
}


// 5. DELETE APPLICANT

function deleteApplicant(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this applicant?"
    );

    if (!confirmDelete) {
        return;
    }

    fetch(API_URL + "/" + id, {
        method: "DELETE"
    })

    .then(function(response) {
        if (!response.ok) {
            throw new Error("Unable to delete applicant");
        }

        alert("Applicant deleted successfully!");
        viewAllApplicants();
    })

    .catch(function(error) {
        console.log(error);
        alert("Delete failed.");
    });
}
