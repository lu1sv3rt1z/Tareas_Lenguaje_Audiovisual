class AirportSystems {
    flights: any[] = [];
    passengers: any[] = [];
    crews: any[] = [];
    planesMaintenance: any[] = [];
    financialRecords: any[] = [];

    // Métodos relacionados con vuelos
    scheduleFlight(flight: any) {
        this.flights.push(flight);
    }

    // Métodos relacionados con pasajeros
    checkInPassenger(passenger: any) {
        this.passengers.push(passenger);
    }

    // Métodos relacionados con tripulaciones
    assignCrewToFlight(crew: any, flightID: string) {
        this.crews.push({...crew, flightID});
    }

    // Métodos relacionados con el mantenimiento de aviones
    logMaintenance(planeID: string, maintenance: any) {
        this.planesMaintenance.push({planeID, ...maintenance});
    }

    // Métodos relacionados con facturación y contabilidad
    recordFinancialTransaction(transaction: any) {
        this.financialRecords.push(transaction);
    }
}
//Solucion

class Flight {
    constructor(public id: string, public flightDetails: any) {}
}

class Passenger {
    constructor(public name: string, public ticket: any) {}
}

class Crew {
    constructor(public name: string, public role: string) {}
}

class PlaneMaintenance {
    constructor(public planeID: string, public maintenanceDetails: any) {}
}

class FinancialRecord {
    constructor(public transactionDetails: any) {}
}

class AirportSystem {
    flights: Flight[] = [];
    passengers: Passenger[] = [];
    crews: Crew[] = [];
    planesMaintenance: PlaneMaintenance[] = [];
    financialRecords: FinancialRecord[] = [];

    // Métodos relacionados con vuelos
    scheduleFlight(flight: Flight) {
        this.flights.push(flight);
    }

    // Métodos relacionados con pasajeros
    checkInPassenger(passenger: Passenger) {
        this.passengers.push(passenger);
    }

    // Métodos relacionados con tripulaciones
    assignCrewToFlight(crew: Crew, flightID: string) {
        this.crews.push(new Crew(crew.name, crew.role));
    }

    // Métodos relacionados con el mantenimiento de aviones
    logMaintenance(planeMaintenance: PlaneMaintenance) {
        this.planesMaintenance.push(planeMaintenance);
    }

    // Métodos relacionados con facturación y contabilidad
    recordFinancialTransaction(transaction: FinancialRecord) {
        this.financialRecords.push(transaction);
    }
}

