function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    
    // Agregamos el método usando 'this'
    this.printMail = function() {
        console.log(this.subject + ": " + this.message);
    }
  }
  
  
  const newMail = new Mail(process.argv[3], process.argv[4])
    
  
  newMail.printMail()