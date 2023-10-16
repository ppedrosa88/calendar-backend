
const { response } = require('express')
const Event = require('../models/Event')


const getEvents = async( req, res = response ) => {

    const events = await Event.find()
                                .populate('user','name')
                                
    res.json({
        ok: true,
        events
    })

}

const createEvent = async(req, res = response) => {

    const event = new Event(req.body)

    try{

        event.user = req.uid

        const saveEvent = await event.save()

        res.json({
            ok: true,
            event: saveEvent
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        })
    }

}


const updateEvent = async(req, res = response) => {

    const eventId = req.params.id
    const uid = req.uid

    try{

        const event = await Event.findById( eventId )

        if ( !event ) {
            res.status(404).json({
                ok: 'false',
                msg: 'Evento no existe por ese id'
            })
        }

        if ( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            })
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } )

        res.json({
            ok: true,
            event: updatedEvent
        })

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })

    }

}


const deleteEvent = async(req, res = response) => {

    const eventId = req.params.id
    const uid = req.uid

    try{

        const event = await Event.findById( eventId )
        
        if ( !event ){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            })
        }

        if ( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio para eliminar este evento'
            })
        }

        await Event.findByIdAndDelete( eventId )

        res.json({
            ok: true,
            msg: 'Evento eliminado'
        })

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
        
    }

}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
}






