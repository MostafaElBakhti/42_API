async function getUser() {
    const login = document.getElementById("login").value;
    const res = await fetch(`/api/user?login=${login}`);
    const data = await res.json();
  
    document.getElementById("result").textContent = JSON.stringify(data, null, 2);
  }
  