import { describe, it, expect, beforeEach, jest } from '@jest/globals'
import mapPerson from '../src/person.js'

describe('Person Test Suite', () => {
    describe('happy path', () => {
        it('should map person', () => {
            const personStr = '{"name":"gabrielvalmarath","age":25}'
            const personObj = mapPerson(personStr)
            expect(personObj).toEqual({
                name: 'gabrielvalmarath',
                age: 25,
                createdAt: expect.any(Date)
            })
        })
    })

    describe('what coverage doesnt tell you', () => {
        it('should not map person given invalid JSON String', () => {
            const personStr = '{"name":'
            expect(() => mapPerson(personStr))
            .toThrow('Unexpected end of JSON input')
        })

        it('should not map person given invalid JSON data', () => {
            const personStr = '{}'
            const personObj = mapPerson(personStr)

            expect(personObj).toEqual({
                name: undefined,
                age: undefined,
                createdAt: expect.any(Date)
            })
        })
    })
})