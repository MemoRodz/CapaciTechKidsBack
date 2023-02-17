
## Presentación

# Repositorio CapaciTechKids para Back

* Diagrama entidad Relación:
<br/>
    <img  src='./img/Version 00.jpeg' height='100px'>
<br/>

```mermaid
---
title: Diagrama E-R CapaciTech Kids
---
classDiagram
    class tblUsers{
        +PK_User: Integer
        +Name: String
        +Email: String
		+Password: String
		+UserType: String
		+Register_Date: DateOnly
		+Active: Boolean
		-timestamps() False
    }
	tblUserXCourses <|-- tblUsers
	note for tblUsers "Relation tblUsers 1 : N tblUserXCourses"
    class tblCourses{
        +PK_Course: Integer
		+Title: String
		+Description: String
		+Start_Date: DateOnly
		+End_Date: DateOnly
		+Image: String
		+Duration: Integer
		+Active: Boolean
		Score: Integer
        -timestamps()
    }
	note for tblCourses "Relation tblCourses 1 : N tblUserXCourses"
	tblUserXCourses <|-- tblCourses
    class tblUserXCourses{
        +PK_UserXCourse: Integer
        +FK_PKUser: Integer
		+FK_PKCourse: Integer
		-timestamps() False
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