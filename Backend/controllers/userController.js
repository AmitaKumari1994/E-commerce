import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

//@desc         Auth user and get token
//@route        POST /api/user/login
//@access       public

const authUser = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
    res.send('auth user');
})

//@desc         Register user
//@route        POST /api/register
//@access       public



const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    
    const userExists = await User.findOne({ email: email })

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");

    }

    const user = await User.create({
        name,
        email,
        password,
    })


    if (user) {
        generateToken(res, user._id);
        // generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data")

    }
});

//@desc         logout user /clear cookies
//@route        POST /api/user/logout
//@access       private

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    })

    res.status(200).json({ message: 'Logged out successfully' })
})

//@desc         Get user profile
//@route        GET /api/users/profile
//@access       private

const getUserProfile = asyncHandler(async ( req, res) => {

    const user = await User.findById( req.user._id);

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(404);
        throw new Error('user not found')
    }

})

//@desc         update user profile
//@route        PUT /api/users/profile
//@access       private

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    console.log(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email


        if (req.body.password) {
            user.password = req.body.password
        }
        

        const updatedUser = await user.save();

        generateToken(res, user._id);
        res.status(200).json({
            _id : updatedUser._id,
            name : updatedUser.name,
            email : updatedUser.email,
            isAdmin : updatedUser.isAdmin

        });
    } else{
        res.status(400)
        throw new Error('User not found')
    }

    })



    //@desc         get users
    //@route        GET /api/users
    //@access       private/Admin

    const getUsers = asyncHandler(async (req, res) => {
        res.send('get users');
    })

    //@desc         get user by id
    //@route        GET /api/user/:id
    //@access       private/Admin

    const getUserByID = asyncHandler(async (req, res) => {
        res.send('get users by id');
    })

    //@desc         Delete user
    //@route        DELETE /api/users/:id
    //@access       private/Admin

    const deleteUser = asyncHandler(async (req, res) => {
        res.send('delete users');
    })

    //@desc         Delete user
    //@route        DELETE /api/users/:id
    //@access       private/Admin

    const updateUser = asyncHandler(async (req, res) => {
        res.send('update users');
    })

    export {
        authUser,
        registerUser,
        logoutUser,
        getUserProfile,
        updateUserProfile,
        getUsers,
        deleteUser,
        getUserByID,
        updateUser
    }

