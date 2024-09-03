// todo students list
const students = [
    {Id:213, name: 'Marco della Rovere', grades: 78},
    {Id:110, name: 'Paola Cortellessa', grades: 96},
    {Id:250, name: 'Andrea Mantegna', grades: 48},
    {Id:145, name: 'Gaia Borromini', grades: 74},
    {Id:196, name: 'Luigi Grimaldello', grades: 68},
    {Id:102, name: 'Piero della Francesca', grades: 50},
    {Id:120, name: 'Francesca da Polenta', grades: 84}
    ]
    
// todo students name uppercase
    const studentsName = students.map((student) => {
        const studentsName = student.name.toUpperCase();
        return studentsName;
    });
    console.log(studentsName);