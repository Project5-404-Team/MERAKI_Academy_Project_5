


const CompaniesFavUsers = () => {
    const {companyId} = useSelector((state)=>{
        return {companyId: state.CompaniesAuth.companyId}
    })
    const [allCompaniesFavUsers,setAllCompaniesFavUsers] = useState("")
    const body={
        userId
    }
    const getCompaniesFavUsers = ()=>{
        axios.get(`http://localhost:5000/companies/favusers/${companyId}`)
        .then((response)=>{
            console.log(result)
            console.log(result.data.result)
            setAllCompaniesFavUsers(result.data.result)
        })
        .catch((err)=>{
          console.log(err)
        })
      }
      useEffect(()=>{
        getCompaniesFavUsers()
      },[])
    return(
        <>
        <div>CompaniesFavUsers</div>
        <div className="allCompaniesFavUsers">
        {allCompaniesFavUsers&&allCompaniesFavUsers.map((elem,index)=>{
            return<div id={elem.id} key={index} className="favCard">
                <img src ={elem.companylogo}></img>
            <p>{elem.fullname}</p>
            <p> {elem.wheredoyoulive}</p>
            <p>{elem.recentjobtitle}</p>
            <p>{elem.industryofrecentjob}</p>
            <p> {elem.yearsofexperience}</p>
          </div>
        }) }
        </div>
        </>
    )
}