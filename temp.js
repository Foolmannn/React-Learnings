async function getCommits() {
  const res = await fetch(
    "https://api.github.com/repos/Foolmannn/React-Learnings/commits"
  );
  const data = await res.json();

  
  return data;
}

const da = await getCommits()
console.log(da);
