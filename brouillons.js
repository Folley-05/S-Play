/* methode d'installation avec RNFetchBlob */

installApp=()=>{
    console.log("debut du telechargement ")
    let dir=RNFetchBlob.fs.dirs
    this.request=RNFetchBlob
    .config({
        path: dir.DownloadDir+"/store/path3.apk",
        appendExt: 'apk',
    })
    .fetch('GET', "https://smart-play.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBOQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b34b7d4ba671ef78867f62f722333a9a84c10ef2/LED%20Neon%20Black.apk")
    this.request.progress((received, total)=>{
        console.log("progression : " + received +"/"+ total + " MB " )
        this.text="progression : " + Math.round(received/1048576) +"/"+ Math.round(total/1048576) + " MB "
        this.setState({...this.state, progress: received/total })
    }).then(res=>{
        this.setState({...this.state, progress: 1})
        console.log("demarrage de l'installation ", res.path())
        android.actionViewIntent(res.path(), 'application/vnd.android.package-archive')
        .then(res=>console.log("fin de l'installation : ", res))
        .catch(err=>console.log("erreur pendant l'installation : ", err))
        this.textButton="Termine"
    })
}

installOne=()=>{
    android.actionViewIntent(RNFetchBlob.fs.dirs.DocumentDir+"/store/path3.apk", 'application/vnd.android.package-archive')
    .then(res=>console.log("fin de l'installation : ", res))
    .catch(err=>console.log("erreur pendant l'installation : ", err))
}

cancel=()=>{
    this.request.cancel(err=>console.log("arret : ", err))
    this.props.navigation.goBack()
}

/* methode de telechargement avec RNBackgroundDownloader */


let task=RNBackgroundDownloader.download({
    id: 'file123',
    url: 'https://smart-play.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBOQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b34b7d4ba671ef78867f62f722333a9a84c10ef2/LED%20Neon%20Black.apk',
    destination: dir // dir est un document : const dir=`${RNBackgroundDownloader.directories.documents}/clavier.apk`
}).begin(expect=>{console.log("size ", expect)})
.progress(percent=>console.log("pourcentage ", percent))
.done(()=>{
    console.log("effectue, debut de l,installation")
    android.actionViewIntent(dir, 'application/vnd.android.package-archive')
})
.error(err=>{console.log("une erreure est survenue ", err)})