
## Presentación

# Repositorio CapaciTechKids para Back

* Diagrama entidad Relación:
<br/>
    <img  src='./img/E-R Diagram CapaciTech Kids Ver 01_1.svg' height='500px' width='1000px'>
<br/>

```mermaid
erDiagram
    USERS ||--|{ USERXCOURSES : PK_User
    USERS {
        integer PK_User
		string Name
        string Email
        string Password
		string UserType
		date Register_date
		boolean Active
    }
    COURSES ||--|{ USERXCOURSES : PK_Course
    COURSES {
        integer PK_Course
        string Title
		string Description
		date Start_Date
		date End_Date
		string Image
		integer Duration
		boolean Active
    }
    USERXCOURSES {
        integer PK_UserXCourse
        integer FK_PKUser
        integer FK_Course
    }
	COURSES }|--|{ COURSEXCATEGORIES :PK_Course
	CATEGORIES }|--|{ COURSEXCATEGORIES : PK_Category
	CATEGORIES {
		integer PK_Category
		string Name
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