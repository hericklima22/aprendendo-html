window.onload = () => {
    const audios = ['audio1.mp3', 'audio2.mp3', 'audio3.mp3', 'audio4.mp3', 'audio5.mp3', 'audio6.mp3']
    const audioIndex = Math.floor(Math.random() * 6)
    const audioToPlay = audios[audioIndex]
    const audioPath = `/audios/${audioToPlay}`

    const source = document.getElementById('autoPlay')
    source.setAttribute('src', audioPath)
}