
## Presentación

# Repositorio CapaciTechKids para Back

* Diagrama entidad Relación:
<br/>
    <img  src='./img/E-R Diagram CapaciTech Kids Ver 01_1.svg' height='500px' width='1000px'>
<br/>

```mermaid
erDiagram
    USERS {
        integer PK_User
		string Name
        string Email
        string Password
		string UserType
		dateonly Register_date
		boolean Active
    }
    USERS ||--|{ UserXCourses : PK_User
    COURSES ||--|{ UserXCourses : PK_Course
    COURSES {
        integer PK_Course
        string Title
		string Description
		dateonly Start_Date
		dateonly End_Date
		string Image
		integer Duration
		boolean Active
    }
	COURSES }|--|{ CourseXCategories : PK_Course
	CATEGORIES }|--|{ CourseXCategories : PK_Category
	CATEGORIES {
		integer PK_Category
		string Name
	}
	COURSES }|--|{ CourseXLectures : PK_Course
	LECTURES }|--|{ CourseXLectures : PK_Lecture
	LECTURES {
		integer PK_Lecture
		string Title
		string Description
		dateonly Pub_Date
		integer Length
	}
	LECTURES }|--|{ LectureXVideos : PK_Lecture
	VIDEOS }|--|{ LectureXVideos : PK_Video
	VIDEOS {
		integer PK_Video
		string Name
		integer Duration
		string URL
	}
	LECTURES }|--|{ LectureXVideos : PK_Lecture
	EXAMS }|--|{ LectureXVideos : PK_Exam
	EXAMS {
		integer PK_Exam
		string Title
		string Description
	}
	EXAMS }|--|{ ExamXQuestions : PK_Exam
	QUESTIONS }|--|{ ExamXQuestions : PK_Question
	QUESTIONS {
		integer PK_Question
		string Statement
		string Options
		string Answer
	}

```


# Colaboradores del proyecto:

* [Agustin Cristobo](https://github.com/Fr33yr)

* [Brandon Reyes](https://github.com/Brareyesb15)

* [Fabián Rizzi](https://github.com/Fabian-Rizzi)

* [Guillermo Rodríguez](https://github.com/MemoRodz)

* [Giuliana Schiebelbein](https://github.com/Giudessch)

* [Randy Gutierrez](https://github.com/Randyvangz)

* [Ricardo Ariel Maya](https://github.com/Rickymayita)

* [Sandro Malca Neyra](https://github.com/SandroMalca)




# NOTAS:

Este repositorio se crea para el desarrollo del Back correspondiente al Proyecto Final del Grupo 7 de la Cohorte 33c.