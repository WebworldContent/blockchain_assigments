class Sphere {
    constructor(radius) {
        this.radius = radius
    }
    
    getVolume() {
        const vol = (4 * Math.PI * (this.radius ** 3)) / 3
        return vol.toFixed(4)
    }
}

class Cylinder {
    constructor(radius, height) {
        this.radius = radius
        this.height = height
    }
    
    getVolume() {
        const vol = Math.PI * (this.radius ** 2) * this.height
        return vol.toFixed(4)
    }
}

class Cone {
    constructor(radius, height) {
        this.radius = radius
        this.height = height
    }
    
    getVolume() {
        const vol = (Math.PI * (this.radius ** 2) * this.height) / 3
        return vol.toFixed(4)
    }
}

const sphere = new Sphere(4)
console.log(sphere.getVolume())

const cone = new Cone(3, 4)
console.log(cone.getVolume())

const cylinder = new Cylinder(3, 4)
console.log(cylinder.getVolume())

