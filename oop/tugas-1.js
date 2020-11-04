class Enemy {
    constructor(name, speed, healtPoint, attackPoint, isDead){
        this.name = name;
        this.speed = speed;
        this.healtPoint = healtPoint;
        this.attackPoint = attackPoint;
        this.isDead = isDead;     
    };

     attack() {    
     
        let objAtt = {
          name:  'mumun',
          speed: 20,
          healtPoint: 100,
          attackPoint: 20,
          isDead: false,
        };
        
        return objAtt;
      }

      confused() {    
        let objConfused = {
          name:  'mamat',
          speed: 10,
          healtPoint: 50,
          attackPoint: 10,
          isDead: true,
        };
        return objConfused;
      }
}

class Pocong extends Enemy{
    // constructor(name, speed, healtPoint, attackPoint, isDead){
    //     super(name, speed, healtPoint, attackPoint, isDead)
    //     };

    jump(){
        let objJump = {
            name:  'mumun',
            speed: 20,
            healtPoint: 100,
            attackPoint: 20,
            isDead: false,
            jump : 'lompat',
        }
        return objJump;
    }

    superJump(){
        let objSuper = {
          name:  'mamat',
          speed: 10,
          healtPoint: 50,
          attackPoint: 10,
          isDead: true,
          superJump : 'terbang',
        }
        return objSuper;
    }
}

class Zombie extends Enemy{
    walk(){
        let objJump = {
            name:  'mumun',
            speed: 20,
            healtPoint: 100,
            attackPoint: 20,
            isDead: false,
            jump : 'lompat',
            walk : 'jalan',
        }
        return objJump;
    }

    running(){
        let objSuper = {
          name:  'mamat',
          speed: 10,
          healtPoint: 50,
          attackPoint: 10,
          isDead: true,
          superJump : 'terbang',
          running : 'jalan nya ga napak'
        }
        return objSuper;
    }
}

let zombi =  new Zombie()
console.log(zombi.running());