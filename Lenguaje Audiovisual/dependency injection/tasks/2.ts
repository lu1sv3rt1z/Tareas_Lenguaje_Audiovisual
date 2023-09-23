class BikeDelivery {
    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address} using a bike.`);
    }
}

class PackageService {
    deliveryMethod: BikeDelivery;

    constructor(deliveryMethod: BikeDelivery) {
        this.deliveryMethod = deliveryMethod;
    }

    sendPackage(packageId: string, address: string) {
        this.deliveryMethod.deliverPackage(packageId, address);
    }
}
