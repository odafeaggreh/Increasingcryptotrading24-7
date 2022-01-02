const userFullName = document.querySelector("#userName");
const userAccountBalance = document.querySelector("#userAccountBalance");
console.log(77);

const setUpDashboard = (user) => {
  db.collection("users")
    .doc(user.uid)
    .onSnapshot((details) => {
      userFullName.innerHTML = `
            

        <div class="welcome-msg pt-3 pb-4">
        <h1 class='text-white' >Hi <span class="text-warning"> ${
          details.data().fullName
        } </span>, Welcome back</h1>
        <div class='hide-md mt-4'>    
          <div class='alert alert-info alert-dismissible fade show' role='alert'>
          </div>    
        </div>
        </div>
          `;

      const deposits = details.data().totalDeposit;

      const depositToNum = Number(deposits);

      const totalDepositNum = depositToNum.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });

      const balance = details.data().totalBalance;

      const balanceToNum = Number(balance);
      console.log(typeof balanceToNum);

      const totalBalanceNum = balanceToNum.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });

      userAccountBalance.innerHTML = `
          

        <div class="statistics hide-md">
        <div class="row">
          <div class="col-xl-6 pr-xl-2">
            <div class="row">
              <div class="col-sm-6 pr-sm-2 statistics-grid">
                <div class="card card_border border-primary-top p-4">
                  <i class="fa fa-money"> </i>
                  <h3 class="text-success number">${totalDepositNum}</h3>
                  <p class="stat-text"> Account Balance </p>
                </div>
              </div>
              <div class="col-sm-6 pl-sm-2 statistics-grid">
                <div class="card card_border border-primary-top p-4">
                  <i class="fa fa-money"> </i>
                  <h3 class="text-secondary number">
                  ${totalBalanceNum}  
                </h3>
                  <p class="stat-text">Total Deposit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          `;
    });
};
