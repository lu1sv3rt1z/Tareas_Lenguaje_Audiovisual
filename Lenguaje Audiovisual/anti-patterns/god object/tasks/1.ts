class Cinema {
    //cambiamos los any ya que tener muchos es peligroso
    movies: string[] = [];
    snacks: string[] = [];
    tickets: number[] = [];
    employees: string[] = [];

    // Métodos relacionados con películas
    addMovie(movie: any) {
        this.movies.push(movie);
    }


    // Métodos relacionados con snacks
    buySnack(snack: any) {
        this.snacks.push(snack);
    }

    // Métodos relacionados con entradas
    buyTicket(ticket: any) {
        this.tickets.push(ticket);
    }

    // Métodos relacionados con empleados
    hireEmployee(employee: any) {
        this.employees.push(employee);
    }
}
//Solucion
class MovieCatalog{
    movies: string[] = [];

    addMovie(movie: any){
        this.movies.push(movie);
    }

    removeMovie(movie: any) {
        const index = this.movies.indexOf(movie);
        if (index > -1) {
            this.movies.splice(index, 1);
        }
    }
}

class SnackManagemnet{
    snacks: string[] = [];

    buySnack(snack: any) {
        this.snacks.push(snack);
    }

    removeSnack(snack: any) {
        const index = this.snacks.indexOf(snack);
        if (index > -1) {
            this.snacks.splice(index, 1);
        }
    }
}

class TicketSys{
    tickets: number[] = [];

    buyTicket(ticket: any) {
        this.tickets.push(ticket);
    }

    cancelOrder(ticket: any) {
        const index = this.tickets.indexOf(ticket);
        if (index > -1) {
            this.tickets.splice(index, 1);
            alert("Order Canceled");
        } else {
            alert("Ticket not found");
        }
    }
}

class EmployeeManagement {
    employees: string[] = [];
    salaries: { [key: string]: number } = {};

    hireEmployee(employee: string, salary: number) {
        this.employees.push(employee);
        this.salaries[employee] = salary;
    }

    fireEmployee(employee: string) {
        const index = this.employees.indexOf(employee);
        if (index > -1) {
            this.employees.splice(index, 1);
            delete this.salaries[employee];
            console.log("Employee has been fired");
        } else {
            console.log("Employee not found");
        }
    }
}

const movieCatalog = new MovieCatalog();
const snackManagement = new SnackManagemnet();
const ticketSystem = new TicketSys();
const employeeManagement = new EmployeeManagement();

//ejemplo
movieCatalog.addMovie("SOS");
snackManagement.buySnack("Soda");
ticketSystem.buyTicket(3);
employeeManagement.hireEmployee("Luis Vertiz", 1000);

movieCatalog.removeMovie("SOS");
snackManagement.removeSnack("Soda");
ticketSystem.cancelOrder(3);
employeeManagement.fireEmployee("Luis Vertiz");