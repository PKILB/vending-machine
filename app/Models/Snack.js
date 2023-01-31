

export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }



    get ListTemplate() {
        return `
        <div class="col-3 p-1">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <img src="${this.imgUrl}" class="py-2 img-fluid">
              <div class="card-body">
                <div class="row">
                  <div class="col-10 small-font align-items-center">
                    ${this.name} 
                  </div>
                  <button class="col-2 btn btn-surprise mdi mdi-cart"></button>
                </div>
                $${this.price} 
              </div>
            </div>
          </div>
        </div>
      </div>`
    }
}
