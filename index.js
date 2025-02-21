import random from 'random'
import jsonfile from 'jsonfile'
import moment from 'moment'
import simpleGit from 'simple-git/promise'

const FILE_PATH = './data.json'
const git = simpleGit()

const makeCommit = async () => {
    const DATE = moment().subtract(1, 'd').format()
    const data = { date: DATE }

    try {
        await jsonfile.writeFile(FILE_PATH, data)
        await git.add([FILE_PATH])
        await git.commit(DATE, { '--date': DATE })
        await git.push()
        console.log('Commit and push successful')
    } catch (error) {
        console.error('Error during commit and push:', error)
    }
}

makeCommit()